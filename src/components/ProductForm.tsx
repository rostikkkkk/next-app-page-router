"use client";
import { FC, useEffect, useMemo } from "react";
import { StringParam, useQueryParams } from "use-query-params";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterProducts } from "@/store/slice/products";
import { useTranslation } from "react-i18next";
import { AppDispatch, RootState } from "@/store/store";
import { Product } from "@/types/productType";
import { Form, Input, Select, Button } from "antd";

const ProductForm: FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);
  const { Option } = Select;
  const [form] = Form.useForm();

  const [query, setQuery] = useQueryParams({
    title: StringParam,
    category: StringParam,
  });

  const handleFilter = (title: string, category: string) => {
    dispatch(filterProducts({ title: title, category: category }));
  };

  const onSubmit = (values: any) => {
    setQuery({ title: values.title, category: values.category });
    handleFilter(values.title, values.category);
  };

  const uniqueCategories = useMemo(() => {
    return Array.from(
      new Set([
        ...products.map((product: Product) => product.bsr_category),
        "All categories",
      ])
    ).sort();
  }, [products]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    form.setFieldsValue({
      title: query.title || "",
      category: query.category || "All categories",
    });
    if (query.title || query.category) {
      handleFilter(query.title || "", query.category || "");
    }
  }, [query, products, form]);

  return (
    <div className="flex justify-center mb-3.5">
      <Form
        form={form}
        onFinish={onSubmit}
        initialValues={{
          title: query.title || "",
          category: query.category || "All categories",
        }}
        layout="inline"
      >
        <Form.Item
          name="title"
          rules={[
            { required: true, message: t("Field is required") },
            { min: 3, message: t("Minimum 3 symbols are required") },
          ]}
          style={{ marginRight: 16 }}
        >
          <Input id="title" placeholder={t("Назва товару")} size="large" />
        </Form.Item>
        <Form.Item name="category">
          <Select id="categories" size="large" style={{ width: 200 }}>
            {uniqueCategories.map((option: string) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" htmlType="submit">
            {t("Шукати")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductForm;
