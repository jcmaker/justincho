"use client";

import { useLanguage } from "./language-provider";
import { Switch } from "@/components/animate-ui/components/headless/switch";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const isKorean = language === "ko";

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-400">EN</span>
      <Switch
        checked={isKorean}
        onChange={(checked) => setLanguage(checked ? "ko" : "en")}
        aria-label={language === "en" ? "Switch to Korean" : "영문으로 전환"}
      />
      <span className="text-sm text-gray-400">한글</span>
    </div>
  );
}
