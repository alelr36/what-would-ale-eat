import { Card } from "./Card";

type Truck = {
  objectid: string;
  applicant: string;
  locationdescription: string;
  fooditems?: string;
  location: {
    latitude: string;
    longitude: string;
  };
};

type Props = {
  trucks: Truck[];
};

export const Results = ({ trucks }: Props) => {
  if ((trucks || []).length === 0) {
    return <div>{`No results =(`}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
      {trucks.map((truck) => (
        <Card
          key={truck.objectid}
          header={truck.applicant}
          body={
            <p>
              {truck.fooditems
                ? truck.fooditems.split(":").join(", ")
                : "No Menu =("}
            </p>
          }
          footer={
            <>
              <p>{truck.locationdescription}</p>
              <p>
                {" "}
                <a
                  target="_blank"
                  href={`https://www.google.com/maps/search/?api=1&query=${truck.location.latitude},${truck.location.longitude}`}
                >
                  View on Map
                </a>
              </p>
            </>
          }
        />
      ))}
    </div>
  );
};
