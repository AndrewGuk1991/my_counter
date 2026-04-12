import styles from "./Main.module.css"
import {SettingsCounter} from "@/features/counter/ui/SettingsCounter/SettingsCounter.tsx";
import {Count} from "@/features/counter/ui/Count/Count.tsx";

export const Main = () => {
    return (
        <div className={styles.container}>
            <SettingsCounter/>
            <Count/>
        </div>
    );
};

