import Label from "../label/Label";
import Dropdown from "../dropdown/Dropdown";
import Button from "../button/Button";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import transaction from "../../stores/transaction";

export default observer(function ExpenseForm() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState("other");
  const [type, setType] = useState<"income" | "expense">("expense");

  const categoryOption = [
    {
      value: "transport",
      label: "Транспорт",
    },
    {
      value: "food",
      label: "Еда",
    },
    {
      value: "other",
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
      amount: Number(amount),
      description,
      category,
      date: new Date(date),
      type,
    };

    transaction.addTransaction(newTransaction);

    setAmount("");
    setDescription("");
    setDate(new Date().toISOString().split("T")[0]);
    setCategory("other");
  };

  return (
    <form className="flex flex-col gap-3 p-2 flex-1" onSubmit={handleSubmit}>
      <div className="relative">
        <Label
          type="number"
          labelText="Сумма:"
          htmlFor="amount"
          placeholderText="1500"
          required={true}
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <span className="absolute right-4 top-9 text-gray-500">₽</span>
      </div>
      <Label
        type="text"
        labelText="Описание"
        htmlFor="description"
        placeholderText="Поездка на такси"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <Dropdown
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        options={categoryOption}
        name="category"
      />
      <Label
        type="date"
        labelText="Дата"
        htmlFor="date"
        placeholderText="12.02.2025"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Dropdown
        value={type}
        onChange={(e) => setType(e.target.value as "income" | "expense")}
        options={typeOfTransactionOption}
        name="type"
        required={true}
      />
      <Button type="submit" label="Добавить" />
    </form>
  );
});
