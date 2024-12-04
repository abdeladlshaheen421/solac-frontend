import { gql } from "@apollo/client";
export function getFindUserQuery() {
  const userQuery = gql`
    query FindUser {
      findUser {
        firstName
        fatherName
        grandfatherName
        familyName
        localizedName {
          firstName
          fatherName
          grandfatherName
          familyName
        }
        nationalId {
          idNumber
          expiryDate
        }
        nationalities {
          country {
            id
            name
          }
          countryId
        }
        maritalStatus {
          id
          name
        }
        dependants
      }
    }
  `;
  return userQuery;
}

export function getUpdateUserQuery() {
  const userQuery = gql`
    mutation UpdateUser($firstName: String!, $fatherName: String!) {
      updateUser(firstName: $firstName, fatherName: $fatherName) {
        firstName
        fatherName
      }
    }
  `;
  return userQuery;
}
