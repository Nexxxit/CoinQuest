import Field from "../field/Field";
import Dropdown from "../dropdown/Dropdown";
import Button from "../button/Button";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import transaction from "../../stores/transaction";

type CategoryKeywords = {
  [category: string]: string[];
};

export default observer(function ExpenseForm() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState("Другое");
  const [type, setType] = useState<"income" | "expense">("expense");

  const categoryOption = [
    {
      value: "Транспорт",
      label: "Транспорт",
    },
    {
      value: "Еда",
      label: "Еда",
    },
    {
      value: "Другое",
      label: "Другое",
    },
  ];

  const typeOfTransactionOption = [
    {
      value: "income",
      label: "Доход",
    },
    {
      value: "expense",
      label: "Расход",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now().toString(),
      amount: parseFloat(amount.replace(/\s/g, "")),
      description,
      category,
      date: new Date(date),
      type,
    };

    transaction.addTransaction(newTransaction);

    setAmount("");
    setDescription("");
    setDate(new Date().toISOString().split("T")[0]);
    setCategory("Другое");
  };

  const categoryKeywords: CategoryKeywords = {
    Транспорт: ["такси", "uber", "метро", "автобус"],
    Еда: ["кафе", "ресторан", "продукты", "кофе"],
  };

  const findCategory = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value.toLowerCase();
    const foundCategory = Object.entries(categoryKeywords).find(
      ([category, keyword]) => {
        return keyword.some((keyword) => value.includes(keyword.toLowerCase()));
      }
    );

    if (foundCategory) {
      setCategory(foundCategory[0]);
    }
  };

  const formatedNumberField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const cleanedValue = value.replace(/[^\d]/g, "");

    const formattedValue = Number(cleanedValue).toLocaleString("ru-RU");

    setAmount(formattedValue);
  };

  return (
    <form
      className="flex flex-col gap-3 p-6 flex-1 shadow-2xl border border-white/20 backdrop-blur-lg rounded-xl"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">Новая транзакция</h2>
      <div className="relative">
        <Field
          type="text"
          labelText="Сумма:"
          htmlFor="amount"
          placeholderText="1500"
          required={true}
          onChange={formatedNumberField}
          value={amount}
          title="Введите сумму!"
          inputClassName="pr-12"
        />
        <span className="absolute right-4 top-1/2 text-white/50 transform">
          ₽
        </span>
      </div>
      <label className="flex flex-col text-white" htmlFor="description">
        Описание:
        <textarea
          id="description"
          className="w-full bg-white/5 rounded-lg py-3 px-4 text-white placeholder-white/50 
                 focus:ring-2 focus:ring-purple-500 border border-white/20 transition-all"
          placeholder="Поездка на такси"
          onChange={(e) => {
            setDescription(e.target.value);
            findCategory(e);
          }}
          value={description}
          maxLength={256}
        ></textarea>
      </label>
      <Dropdown
        htmlFor="category"
        labelText="Категория:"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        options={categoryOption}
        name="category"
      />
      <Field
        type="date"
        labelText="Дата:"
        htmlFor="date"
        placeholderText="12.02.2025"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Dropdown
        htmlFor="type"
        labelText="Тип:"
        value={type}
        onChange={(e) => setType(e.target.value as "income" | "expense")}
        options={typeOfTransactionOption}
        name="type"
        required={true}
      />
      <Button className="w-full" type="submit" label="Добавить" />
    </form>
  );
});
