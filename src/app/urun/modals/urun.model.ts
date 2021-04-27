import { UrunDetay } from '../urun-detay/modals/urun-detay.model';

export class Urun {
  id: number | undefined;
  ad?: string;
  alisFiyati:number | undefined;
  satisFiyati:number | undefined;
  aciklama:string | undefined;
  urunTip : UrunDetay = new UrunDetay();
  urunTipId : number| undefined;
}
