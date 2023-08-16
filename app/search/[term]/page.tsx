import { SearchParams } from "@/typings"
import { redirect } from "next/navigation";

type Props = {
  searchParams: SearchParams;
  params: {
    term: string;
  };
};

function SearchPage({ searchParams, params: { term } }: Props) {
  if (!term) {
    redirect("/");
  }

//   fetch from API..


  return <div>{/* ResultsList */}</div>;
}

export default SearchPage;
