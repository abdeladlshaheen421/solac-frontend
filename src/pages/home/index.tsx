import { useEffect, useState } from "react";
import { getFindUserQuery } from "../../utils";
import { useQuery } from "@apollo/client";
import { CircularProgress, Grid } from "@mui/material";
import GenericCard from "../../components/genericCard";
import {
  nationalitiesType,
  UserInterface,
} from "../../interfaces/user.interface";

export default function Home() {
  const { data, loading } = useQuery(getFindUserQuery());
  const [user, setUser] = useState<UserInterface>();
  useEffect(() => {
    if (data) {
      setUser(data.findUser);
    }
  }, [data]);
  return loading ? (
    <CircularProgress color="secondary" />
  ) : (
    <Grid
      container
      padding={4}
      style={{
        background: "#EEEEEE80",
      }}
    >
      <Grid xs={3}>test</Grid>
      <Grid item xs={9}>
        <GenericCard
          setUser={setUser}
          user={user}
          title="Basic Information"
          arrayOfData={[
            {
              label: "National ID Number",
              gridSize: 3,
              value: user?.nationalId.idNumber as string,
            },
            {
              label: "National Expiring Date",
              gridSize: 3,
              value: user?.nationalId.expiryDate as string,
            },
            {
              label: "Title",
              gridSize: 6,
              value: "Mr.",
            },
            {
              label: "First Name",
              gridSize: 3,
              value: user?.firstName as string,
            },
            {
              label: "Father Name",
              gridSize: 3,
              value: user?.fatherName as string,
            },
            {
              label: "Grand Father Name",
              gridSize: 3,
              value: user?.grandfatherName as string,
            },
            {
              label: "Family Name",
              gridSize: 3,
              value: user?.familyName as string,
            },
            {
              label: "الأسم الأول",
              gridSize: 3,
              value: user?.localizedName.firstName as string,
            },
            {
              label: "اسم الأب",
              gridSize: 3,
              value: user?.localizedName.fatherName as string,
            },
            {
              label: "اسم الجد",
              gridSize: 3,
              value: user?.localizedName.grandfatherName as string,
            },
            {
              label: "اللقب / اسم العائلة",
              gridSize: 3,
              value: user?.localizedName.familyName as string,
            },
            {
              label: "Date of birth",
              gridSize: 3,
              value: "01/04/1980",
            },
            {
              label: "Gender",
              gridSize: 3,
              value: "Male",
            },
            {
              label: "Nationalities",
              gridSize: 3,
              value: user?.nationalities?.[0]?.country.name as string,
            },
            {
              label: "other Nationalities",
              gridSize: 3,
              value: user?.nationalities.reduce(
                (acc: string, nationality: nationalitiesType) =>
                  `${acc + nationality.country.name}, `,
                ""
              ) as string,
            },
            {
              label: "Passport No.",
              gridSize: 3,
              value: "A135464",
            },
            {
              label: "Passport Issue Date.",
              gridSize: 3,
              value: "01 / 04 / 1980",
            },
            {
              label: "Passport Expiry Date.",
              gridSize: 6,
              value: "01 / 04 / 1980",
            },
            {
              label: "Marital Status",
              gridSize: 3,
              value: user?.maritalStatus.name as string,
            },
            {
              label: "Dependencies",
              gridSize: 3,
              value: user?.dependants + "",
            },
          ]}
        />
        <GenericCard
          title="Contact Information"
          arrayOfData={[
            {
              label: "Personal Email",
              gridSize: 3,
              value: "John.smith@gmail.com",
            },
            {
              label: "Mobile",
              gridSize: 3,
              value: "011223344556",
            },
          ]}
        />
        <GenericCard
          title="Emergency Contacts"
          arrayOfData={[
            {
              label: "Emergency Contact Person Name",
              gridSize: 3,
              value: "John John",
            },
            {
              label: "Emergency Relation",
              gridSize: 3,
              value: "Father",
            },
            {
              label: "Emergency Phone",
              gridSize: 3,
              value: "011224477885",
            },
          ]}
        />
        <GenericCard
          title="Address Details"
          arrayOfData={[
            {
              label: "Country",
              gridSize: 3,
              value: "Egypt",
            },
            {
              label: "City",
              gridSize: 3,
              value: "Cairo",
            },
            {
              label: "Postal Code",
              gridSize: 6,
              value: "11728",
            },
            {
              label: "Building",
              gridSize: 3,
              value: "7",
            },
            {
              label: "Street",
              gridSize: 3,
              value: "street 127",
            },
            {
              label: "Floor No",
              gridSize: 3,
              value: "7",
            },
            {
              label: "Appartment",
              gridSize: 3,
              value: "72",
            },
          ]}
        />
        <GenericCard
          title="Driving License Details"
          arrayOfData={[
            {
              label: "Driving License",
              gridSize: 3,
              value: "Yes",
            },
            {
              label: "Driving License Type",
              gridSize: 3,
              value: "C1E",
            },
            {
              label: "Driving License Expiry Date",
              gridSize: 3,
              value: "01 / 04 / 2025",
            },
          ]}
        />
        <GenericCard
          title="Military Status"
          arrayOfData={[
            {
              label: "Require Travel Permit",
              gridSize: 3,
              value: "Yes",
            },
            {
              label: "Military Status",
              gridSize: 3,
              value: "Exempted",
            },
            {
              label: "Document",
              gridSize: 3,
              value: "filename1.docx",
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}
