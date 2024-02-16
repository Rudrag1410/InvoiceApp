import { useRouter } from "next/router";
import View from "components/view";

const Invoice = () => {
  const { query } = useRouter();

  const { id } = query;

  return <View id={id as string} />;
};

export default Invoice;
