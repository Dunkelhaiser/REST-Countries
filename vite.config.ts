import { defineConfig } from "vite";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import cssNano from "cssnano";
import postcssPresetEnv from "postcss-preset-env";
import postcssAdvancedVariables from "postcss-advanced-variables";
import postcssExtendRule from "postcss-extend-rule";
import postcssNested from "postcss-nested";
import postcssCustomMedia from "postcss-custom-media";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [
                postcssImport(),
                cssNano(),
                autoprefixer(),
                postcssPresetEnv({ stage: 1 }),
                postcssNested(),
                postcssAdvancedVariables(),
                postcssCustomMedia(),
                postcssExtendRule(),
            ],
        },
    },
});
