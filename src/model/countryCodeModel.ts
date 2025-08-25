import { Document, model, Schema } from "mongoose";

export interface ICountryCode extends Document {
  countryName: string;
  countryCode: string;
}

const countryCodeSchema = new Schema<ICountryCode>({
  countryName: { type: String, required: true },
  countryCode: { type: String, required: true },
});

const CountryCodeModel = model<ICountryCode>(
  "country_codes",
  countryCodeSchema
);

export default CountryCodeModel;
