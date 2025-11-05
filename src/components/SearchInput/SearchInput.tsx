import type { UseFormRegister } from "react-hook-form";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
  register: UseFormRegister<{ search: string }>;
}

const SearchInput = ({ register }: SearchInputProps) => {
  return (
    <div className={styles.container}>
      <input
        {...register("search")}
        type="text"
        placeholder="Search projects..."
        aria-label="Search projects"
        className={styles.input}
      />
    </div>
  );
};

export default SearchInput;
