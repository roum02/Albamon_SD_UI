import { MainBanner } from '@components/lib';
import { gql, useQuery } from "@apollo/client";
import { client } from '@apollo-client/client'


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
    // client version
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

// SSR version
// export const getServerSideProps = async () => {
//     try{
//         const {data} = await client.query({
//             query: GET_CARDS
//         });
//
//         return {
//             props: {
//                 cards: data.getCards.collection,
//             }
//         };
//     } catch (error){
//         return {
//             props: {
//                 cards: [],
//                 error: "Failed to fetch data"
//             }
//         }
//     }
// }