import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: 'skn9HgD536IL2kbeZx3foJuuHQb7TLsDTLdo5WLsyKw1NxQOBJ4zWSZWmntHTzs1yu9cMbNw9BCPV9EPRajwgQIHWCtubUUSU1I4CzOHl43pFHnsWIBr6nmT46WWHWT5OH8Z7h0HJpZXpZOlPldfEBEgfjPpoVauhyJ1SVUyjouMKRYfTJOC'
})
