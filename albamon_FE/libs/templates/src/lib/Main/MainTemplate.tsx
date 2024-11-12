import { MainBanner } from '@components/lib';
import { gql, useQuery } from "@apollo/client";
import { client } from '@apollo-client/client'
import { NetworkStatus } from '@apollo/client';


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
    const { loading, error, data, networkStatus, refetch } = useQuery(GET_CARDS, {
        //pollInterval: 500,
        notifyOnNetworkStatusChange: true,
    });

    console.log(data)
    if (networkStatus === NetworkStatus.refetch) return <p>Refetching!</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

  return (
      <div>
          <MainBanner/>
          <button onClick={() => refetch()}>
              Refetch
          </button>
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