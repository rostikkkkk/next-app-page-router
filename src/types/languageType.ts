export interface Language {
    code: string;
    label: string;
}

export interface LangSwitcherProps {
    lang: Language;
    setLang: (lang: Language) => void;
}
