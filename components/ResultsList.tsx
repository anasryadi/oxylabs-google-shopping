import { PageResult } from "@/typings";
import Link from "next/link";

type Props = {
  results: PageResult[];
  term: string;
};

function ResultsList({ results, term }: Props) {
  return (
    <div className="flex md:px-5">
      {/* sidebar */}
      <div>
        {results.map((pageResult) => (
          <div key={pageResult.job_id} className="space-y-2">
            {pageResult.content.results.filters?.map((filter, i) => (
              <div key={i} className="border rounded-r-lg md:rounded-lg p-5">
                <p className="font-bold">{filter.name}</p>
                <div className="flex flex-col">
                  <p>{filter.name}</p>
                  {filter.values.map((value) => (
                    <Link
                      prefetch={false}
                      href={`https://www.google.com/$value.url`}
                    >
                      {value.value}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* main body */}
      <div>
        {results.map((pageResult, i) => (
            <div key={pageResult.job_id} className="">

            </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsList;
