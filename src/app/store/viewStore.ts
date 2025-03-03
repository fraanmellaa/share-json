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

interface ViewState {
  jsonData: Record<string, JsonData> | Array<JsonData> | null;
  uiStyle: JsonViewerUI | null;
  created_at: Date | null;
  loading: boolean;
  setJsonData: (
    data: Record<string, JsonData> | Array<JsonData> | null
  ) => void;
  setUiStyle: (style: JsonViewerUI) => void;
  setCreatedAt: (created_at: Date) => void;
  setLoading: (loading: boolean) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  jsonData: null,
  uiStyle: null,
  created_at: null,
  loading: true,
  setJsonData: (data) => set({ jsonData: data }),
  setUiStyle: (style) => set({ uiStyle: style }),
  setCreatedAt: (created_at) => set({ created_at }),
  setLoading: (loading) => set({ loading }),
}));
