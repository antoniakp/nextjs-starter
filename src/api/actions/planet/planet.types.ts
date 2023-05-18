export type Planet = {
  name: string;
  climate: string;
};

export type GetPlanetsResponse = {
  results: Planet[];
  count: number;
  next: string | null;
  previous: string | null;
};

export type AddPlanetResponse = Planet & {
  id: number;
};
