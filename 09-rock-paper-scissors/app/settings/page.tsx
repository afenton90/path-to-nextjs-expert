import { cookies } from "next/headers";
import { getSettingValue, SettingsOptions } from "./options";
import { SettingsForm } from "../components/SettingsForm";

const Settings = () => {
  const nextCookies = cookies();

  const defaultGameLength = getSettingValue<number>(
    SettingsOptions.GameLength,
    nextCookies
  );
  const defaultTheme = getSettingValue<string>(
    SettingsOptions.Theme,
    nextCookies
  );

  return (
    <main>
      <h1>Settings page</h1>
      <SettingsForm>
        <label>
          <span>Game Length (secs)</span>
          <input
            type="number"
            name={SettingsOptions.GameLength}
            defaultValue={defaultGameLength ?? 5}
          />
        </label>
        <fieldset>
          <legend>Theme</legend>
          <label>
            <span>Light</span>
            <input
              type="radio"
              name={SettingsOptions.Theme}
              value="light"
              defaultChecked={defaultTheme === "light"}
            />
          </label>
          <label>
            <span>Dark</span>
            <input
              type="radio"
              name={SettingsOptions.Theme}
              value="dark"
              defaultChecked={defaultTheme === "dark"}
            />
          </label>
        </fieldset>
        <button type="submit">Save</button>
      </SettingsForm>
    </main>
  );
};

export default Settings;
