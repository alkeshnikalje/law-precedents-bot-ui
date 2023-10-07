import { CrimeCategory } from "../App";
export default function Result({
  answer,
}: {
  answer: CrimeCategory | string | null;
}) {
  return (
    <>
      {typeof answer === "string" && (
        <div>
          <p className="max-w-md whitespace-normal text-white">{answer}</p>
        </div>
      )}
      {typeof answer === "object" && answer !== null && "cases" in answer && (
        <>
          {answer.cases.map((crime) => (
            <div key={crime.name}>
              <p className="max-w-md whitespace-normal text-white">
                {crime.name}
              </p>
            </div>
          ))}
        </>
      )}
    </>
  );
}
