import { MainBanner } from '@components/lib';
import {gql, useLazyQuery, useQuery} from "@apollo/client";
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

const GET_PROMOTION_BANNER = gql`
query GetPromotionBanners{
    getPromotionBanners {
        promotionBannerCount
        promotionBanners {
            bannerImageUrl
            bannerTitle
            alternateTitle
            appMenuNo
            bannerBackGroundColor
            bannerLinkUrl
            bannerNo
        }
    }
}
`



export const MainTemplate = () => {
    // client version
    const [getCards, { loading: loadingCards, error: errorCards, data: dataCards, networkStatus: networkStatusCards, refetch: refetchCards }] = useLazyQuery(GET_CARDS, {
        //pollInterval: 500,
        notifyOnNetworkStatusChange: true,
    });

    const { loading: loadingPromotion, error: errorPromotion, data: dataPromotion, networkStatus: networkStatusPromotion, refetch: refetchPromotion } = useQuery(GET_PROMOTION_BANNER, {})

    if (networkStatusCards === NetworkStatus.refetch) return <p>Refetching!</p>;
    if (loadingCards || loadingPromotion) return <p>Loading...</p>;
    if (errorCards || errorPromotion) return <p>Error : {errorCards.message}</p>;


  return (
      <div>
          <MainBanner promotionBannerData={dataPromotion.getPromotionBanners}/>
          <button onClick={() => refetchCards()}>
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