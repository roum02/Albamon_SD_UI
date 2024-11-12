import { MainBanner } from '@components/lib';
import { gql, useQuery } from "@apollo/client";


interface NextRequestInit extends RequestInit {
  next?: {
    revalidate: number;
  };
}

const GET_CARDS = gql`
  query GetCards {
      getCards {
        resultCode
        resultMessage
        totalCount
        row
        column
        collection {
          franchiseCode
          franchiseName
          franchiseLogo
          keywordCode
          keywordName
          partCode
          partName
        }
      }
    }
`;


export const MainTemplate = () => {
    const { loading, error, data } = useQuery(GET_CARDS);

    console.log(data)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <MainBanner />
      <h1>main card list</h1>
    </div>
  );
};
