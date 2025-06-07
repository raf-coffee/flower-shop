import {
  JoinQuery,
  PayloadRequest,
  PopulateType,
  RequestContext,
  Sort,
  TypedLocale,
  Where,
  WhereField,
} from "payload";
import {
  Category,
  Config,
  Media,
  Occasion,
  Review,
  Tag,
  Whom,
} from "@/payload-types";
import data from "@/data";

export type PayloadCollections = keyof Omit<
  Config["collections"],
  | "payload-locked-documents"
  | "payload-preferences"
  | "payload-migrations"
  | "users"
>;

export type PayloadSelectProductCollections = Omit<
  Config["collectionsSelect"],
  | InitialCollections
  | "payload-locked-documents"
  | "payload-preferences"
  | "payload-migrations"
  | "users"
>;

export type PayloadSelectAllCollection = Omit<
  Config["collectionsSelect"],
  | "payload-locked-documents"
  | "payload-preferences"
  | "payload-migrations"
  | "users"
>;

export type ProductCollections = keyof Omit<
  typeof data,
  "occasions" | "tags" | "whom" | "categories" | "reviews"
>;

export type InitialCollections = "tags" | "occasions" | "categories" | "whom";

export type FindByIDOptions<T extends PayloadCollections> = {
  context?: RequestContext;
  currentDepth?: number;
  depth?: number;
  disableErrors?: boolean;
  draft?: boolean;
  fallbackLocale?: false | TypedLocale;
  includeLockStatus?: boolean;
  joins?: JoinQuery<T>;
  locale?: "all" | TypedLocale;
  overrideAccess?: boolean;
  populate?: PopulateType;
  req?: Partial<PayloadRequest>;
  select?: PayloadSelectAllCollection[T];
  showHiddenFields?: boolean;
  user?: Document;
};

export type FindAllOptions<T extends PayloadCollections> = {
  context?: RequestContext;
  currentDepth?: number;
  depth?: number;
  disableErrors?: boolean;
  draft?: boolean;
  fallbackLocale?: false | TypedLocale;
  includeLockStatus?: boolean;
  joins?: JoinQuery<T>;
  limit?: number;
  locale?: "all" | TypedLocale;
  overrideAccess?: boolean;
  page?: number;
  pagination?: boolean;
  populate?: PopulateType;
  req?: Partial<PayloadRequest>;
  select?: PayloadSelectAllCollection[T];
  showHiddenFields?: boolean;
  sort?: Sort;
  user?: Document;
  where?: Partial<WhereType<T>> & Where;
};

type CollectionFields<T extends PayloadCollections> = keyof Omit<
  Config["collections"],
  | "payload-locked-documents"
  | "payload-preferences"
  | "payload-migrations"
  | "users"
>[T];

type WhereType<T extends PayloadCollections> = {
  [key in CollectionFields<T>]: WhereField;
};

export interface Label {
  title: string;
  bg: string;
  color?: string;
}

export interface Breadcrumb {
  title: string;
  href?: string;
}

export type GenerateDataOptions = {
  count: number;
  reviewSet: Review[];
  imageIds: Media[];
  tagSet: Tag[];
  occasionSet: Occasion[];
  whomSet: Whom[];
  categoriesSet: Category[];
  names: string[];
  descriptions: string[];
};

export type Flowers = keyof typeof data.flowers.imageNames;

export type GenerateCommonFields = {
  imageIds: Media[];
  reviewSet: Review[];
  tagSet: Tag[];
  occasionSet: Occasion[];
  whomSet: Whom[];
  names: string[];
  descriptions: string[];
};
