import { Link } from 'react-router-dom';

const Chevron = () => (
  <svg
    className="w-4 h-4 text-gray-300 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const PageHeader = (props) => {
  const items = props.items ?? [];
  const hasItems = items.length > 0;

  return (
    <div className="mb-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {props.titles}
          </h1>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm">
              {items.map((value, index) => (
                <li key={index} className="flex items-center gap-1.5">
                  {index > 0 && <Chevron />}
                  {props.links ? (
                    <Link
                      to={props.links[index]}
                      className="rounded-md px-2 py-0.5 -ml-0.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    >
                      {value}
                    </Link>
                  ) : (
                    <span className="text-gray-500 px-2 py-0.5 -ml-0.5">
                      {value}
                    </span>
                  )}
                </li>
              ))}
              <li className="flex items-center gap-1.5" aria-current="page">
                {hasItems && <Chevron />}
                <span className="rounded-md px-2 py-0.5 -ml-0.5 bg-gray-100 text-gray-900 font-medium">
                  {props.active}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
