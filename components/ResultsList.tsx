import { PageResult } from "@/typings";

type Props = {
  results: PageResult[];
  term: string;
};

function ResultsList({ results, term }: Props) {
  return (
    <div>
      {/* sidebar */}
      <div>
        {/* each page */}
        {results.map((pageResult) => (
          <div key={pageResult.job_id} className="space-y-2">
            {pageResult.content.results.filters?.map((filter) => (
              <div>
                <p>{filter.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* main body */}
    </div>
  );
}

export default ResultsList;
