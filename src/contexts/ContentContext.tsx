import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { supabase } from "@/integrations/supabase/client";
import { defaultContent, SiteContent, ContentKey } from "@/data/defaultContent";

interface ContentContextValue {
  content: SiteContent;
  updateSection: (key: ContentKey, value: SiteContent[ContentKey]) => Promise<void>;
  isLoading: boolean;
}

const ContentContext = createContext<ContentContextValue>({
  content: defaultContent,
  updateSection: async () => {},
  isLoading: true,
});

export const useContent = () => useContext(ContentContext);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("site_content")
        .select("key, value");

      if (!error && data) {
        const merged = { ...defaultContent };
        for (const row of data) {
          const key = row.key as ContentKey;
          if (key in merged) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (merged as any)[key] = row.value;
          }
        }
        setContent(merged);
      }
      setIsLoading(false);
    };
    load();
  }, []);

  const updateSection = useCallback(
    async (key: ContentKey, value: SiteContent[ContentKey]) => {
      const { error } = await supabase
        .from("site_content")
        .upsert({ key, value }, { onConflict: "key" });

      if (error) throw error;
      setContent((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  return (
    <ContentContext.Provider value={{ content, updateSection, isLoading }}>
      {children}
    </ContentContext.Provider>
  );
};
