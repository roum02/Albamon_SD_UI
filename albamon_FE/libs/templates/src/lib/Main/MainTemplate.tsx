import { MainBanner } from '@components/lib';
import { gql, useQuery } from "@apollo/client";


interface NextRequestInit extends RequestInit {
  next?: {
    revalidate: number;
  };
}

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;


export const MainTemplate = () => {
    const { loading, error, data } = useQuery(GET_LOCATIONS);
    console.log("hello: ", data)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

  // client
  //     .query({
  //       query: gql`
  //     query GetLocations {
  //       locations {
  //         id
  //         name
  //         description
  //         photo
  //       }
  //     }
  //   `,
  //     })
  //     .then((result) => console.log(result));

  // const fetchCards = async () => {
  //   const query = `
  //   query GetCards {
  //     getCards {
  //       resultCode
  //       resultMessage
  //       totalCount
  //       row
  //       column
  //       collection {
  //         franchiseCode
  //         franchiseName
  //         franchiseLogo
  //         keywordCode
  //         keywordName
  //         partCode
  //         partName
  //       }
  //     }
  //   }
  // `;
  //   const response = await fetch('https://albamon-sd-ui.onrender.com/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ query }),
  //     next: { revalidate: 10 },
  //   } as NextRequestInit);
  //
  //
  //   const data = await response.json();
  //   return data;
  // };
  //
  // // Example usage
  // fetchCards()
  //   .then((data) => console.log(data))
  //   .catch((error) => console.error('Error fetching cards:', error));

  return (
    <div>
      <MainBanner />
      <h1>main card list</h1>
    </div>
  );
};
