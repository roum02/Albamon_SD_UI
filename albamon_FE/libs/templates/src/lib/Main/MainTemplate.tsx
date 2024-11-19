import { CardList, MainBanner } from '@components/lib';
import { useLazyQuery, useQuery } from '@apollo/client';
import { NetworkStatus } from '@apollo/client';
import { GET_CARDS, GET_PROMOTION_BANNER } from '@graphql/main';

interface NextRequestInit extends RequestInit {
  next?: {
    revalidate: number;
  };
}

export const MainTemplate = () => {
  // client version
  const [
    getCards,
    {
      loading: loadingCards,
      error: errorCards,
      data: dataCards,
      networkStatus: networkStatusCards,
      refetch: refetchCards,
    },
  ] = useLazyQuery(GET_CARDS, {
    //pollInterval: 500,
    notifyOnNetworkStatusChange: true,
  });

  const {
    loading: loadingPromotion,
    error: errorPromotion,
    data: dataPromotion,
    networkStatus: networkStatusPromotion,
    refetch: refetchPromotion,
  } = useQuery(GET_PROMOTION_BANNER, {});

  if (networkStatusCards === NetworkStatus.refetch) return <p>Refetching!</p>;
  if (loadingCards || loadingPromotion) return <p>Loading...</p>;
  if (errorCards || errorPromotion) return <p>Error : {errorCards?.message}</p>;

  return (
    <div>
      <MainBanner promotionBannerData={dataPromotion.getPromotionBanners} />
      <button onClick={() => refetchCards()}>card refetch</button>
      <CardList cardData={dataCards?.getCards} />
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
