export interface HomeBrandBannerBffResponse {
  /**
   * 브랜드 No
   *
   * example: 96
   **/
  franchiseCode: number;
  /**
   * 브랜드명
   *
   * example: 더플레이스
   **/
  franchiseName: string;
  /**
   * 기업 로고
   *
   * example: https://test-imgs.albamon.kr/images/franchise_booth/45/MBrandMain_Logo.gif
   **/
  franchiseLogo: string;
  /**
   * 키워드 코드
   *
   * example: 1040009
   **/
  keywordCode: string;
  /**
   * 키워드명-기업명
   *
   * example: KFC
   **/
  keywordName: string;
  /**
   * 업직종코드
   *
   * example: 1040
   **/
  partCode: string;
  /**
   * 업직종명
   *
   * example: 패스트푸드점
   **/
  partName: string;
}
