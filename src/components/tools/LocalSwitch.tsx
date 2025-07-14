"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className="border-b-2 border-gray-800 dark:border-gray-200">
      {/* <p className='sr-only'>change language</p> */}
      <select
        defaultValue={localActive}
        className="bg-inherit font-ShabnamMedium text-sm py-1 text-gray-800 dark:text-gray-300 "
        onChange={onSelectChange}
        disabled={isPending}
        dir="rtl"
      >
        <option value="en">English</option>
        <option value="id">فارسی</option>
      </select>
    </label>
  );
}
