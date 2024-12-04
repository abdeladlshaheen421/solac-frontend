export interface UserInterface {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
  localizedName: localizedNameType;
  nationalId: nationalIdType;
  nationalities: nationalitiesType[];
  maritalStatus: maritalStatusType;
  dependants: number;
}

interface localizedNameType {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
}

interface nationalIdType {
  idNumber: string;
  expiryDate: string;
}

export interface nationalitiesType {
  country: countryType;
  countryId: number;
}
interface maritalStatusType {
  id: string;
  name: string;
}

interface countryType {
  id: string;
  name: string;
}
