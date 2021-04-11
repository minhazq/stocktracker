export class TableModel{
  public ticker: string ;
  public companyDetails: string;
  public entryDate: string;
  public entryPrice: string;
  public exitDate:string;
  public exitPrice:string;
  public profitPerShare:string;
  public netBalance:string

  constructor(ticker:string, companyDetails:string,entryDate:string,entryPrice:string,
              exitDate:string,exitPrice:string,profitPerShare:string,netBalance:string) {
    this.ticker = ticker;
    this.companyDetails=companyDetails;
    this.entryDate=entryDate;
    this.entryPrice=entryPrice;
    this.exitDate=exitDate;
    this.exitPrice=exitPrice;
    this.profitPerShare=profitPerShare;
    this.netBalance=netBalance;
  }

}
