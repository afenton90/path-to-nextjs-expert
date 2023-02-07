"use client";

import { FormEvent, useCallback } from "react";
import { setSettingValue, SettingsOptions } from "../settings/options";

interface SettingsFormProps {
  children: React.ReactNode;
}

export const SettingsForm = ({ children }: SettingsFormProps) => {
  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    setSettingValue(
      SettingsOptions.GameLength,
      formData.get(SettingsOptions.GameLength)
    );
    setSettingValue(SettingsOptions.Theme, formData.get(SettingsOptions.Theme));
  }, []);

  return (
    <form method="post" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
