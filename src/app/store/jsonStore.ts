import { create } from "zustand";

export type JsonData =
  | string
  | number
  | boolean
  | null
  | undefined
  | JsonData[]
  | { [key: string]: JsonData };

type FontStyle = {
  family?: string;
  weight?: string;
  size?: string;
};

export type JsonViewerUI = {
  font?: { key?: FontStyle; value?: FontStyle } | FontStyle;
  keyColor?: string;
  valueColor?: { [key: string]: string };
  nullColor?: string;
  backgroundColor?: string;
  keyClass?: string;
  valueClass?: string;
  containerClass?: string;
};

interface JsonState {
  rawData: string;
  jsonData: Record<string, JsonData> | Array<JsonData> | null;
  uiStyle: JsonViewerUI;
  customizationActivated: boolean;
  isGenerating: boolean;
  isGenerated: boolean;
  generatedLink: string;
  setRawData: (data: string) => void;
  setJsonData: (
    data: Record<string, JsonData> | Array<JsonData> | null
  ) => void;
  setUiStyle: (style: JsonViewerUI) => void;
  setCustomizationActivated: (customizationActivated: boolean) => void;
  setIsGenerating: (isGenerating: boolean) => void;
  setIsGenerated: (isGenerated: boolean) => void;
  setGeneratedLink: (link: string) => void;
  reset: () => void;
}

export const useJsonStore = create<JsonState>((set) => ({
  rawData: "",
  jsonData: null,
  uiStyle: {
    font: { family: "Roboto", weight: "400", size: "14px" },
    nullColor: "#ff0000",
    valueColor: {
      string: "#00c951",
      number: "#2b7fff",
      boolean: "#2b7fff",
    },
    keyColor: "#2b7fff",
    keyClass: "font-normal",
    valueClass: "font-normal",
    backgroundColor: "#ff910010",
    containerClass: "bg-transparent min-h-full rounded-md",
  },
  customizationActivated: false,
  isGenerating: false,
  isGenerated: false,
  generatedLink: "",
  setRawData: (data) => set({ rawData: data }),
  setJsonData: (data) => set({ jsonData: data }),
  setUiStyle: (style) => set({ uiStyle: style }),
  setCustomizationActivated: (customizationActivated) =>
    set({ customizationActivated }),
  setIsGenerating: (isGenerating) => set({ isGenerating }),
  setIsGenerated: (isGenerated) => set({ isGenerated }),
  setGeneratedLink: (link) => set({ generatedLink: link }),
  reset: () =>
    set({
      rawData: "",
      jsonData: null,
      uiStyle: {
        font: { family: "Roboto", weight: "400", size: "14px" },
        nullColor: "#ff0000",
        valueColor: {
          string: "#00c951",
          number: "#2b7fff",
          boolean: "#2b7fff",
        },
        keyColor: "#2b7fff",
        keyClass: "font-normal",
        valueClass: "font-normal",
        backgroundColor: "#ff910010",
        containerClass: "bg-transparent min-h-full rounded-md",
      },
      customizationActivated: false,
      isGenerating: false,
      isGenerated: false,
      generatedLink: "",
    }),
}));
