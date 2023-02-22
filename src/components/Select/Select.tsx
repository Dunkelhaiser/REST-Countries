import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import SelectStyles from "./Select.module.css";

interface Props {
    options: string[];
    onSelect: (option: string) => void;
}

const Select: React.FC<Props> = ({ options, onSelect }) => {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState("");
    const selectRef = useRef(null);

    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                setOpened(false);
                setSelected("");
                onSelect("");
            }
        };

        document.addEventListener("keydown", onEsc);

        return () => {
            document.removeEventListener("keydown", onEsc);
        };
    }, []);

    const useOutsideAlerter = (ref: React.RefObject<HTMLDivElement>) => {
        useEffect(() => {
            const handleClickOutside = (e: MouseEvent) => {
                if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
                    setOpened(false);
                    setSelected("");
                    onSelect("");
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };

    useOutsideAlerter(selectRef);

    return (
        <div className={SelectStyles.select_wrapper}>
            <button type="button" className={SelectStyles.select_btn} aria-expanded={opened} onClick={() => setOpened((prev) => !prev)}>
                <span className={SelectStyles.option}>{selected || "Filter by Region"} </span>
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {opened && (
                <div className={SelectStyles.content} ref={selectRef}>
                    <ul className={SelectStyles.options}>
                        {options?.map((option) => (
                            <li
                                key={uuid()}
                                onClick={() => {
                                    setSelected(option);
                                    onSelect(option);
                                    setOpened(false);
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Select;
