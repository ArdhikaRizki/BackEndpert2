

export interface IGlobalResponse<T = unknown> { 
    status: Boolean;
    message: string;
    data?: T;
    pagination?: IPagination;
    error?: IErrorDetail | IErrorDetail[];
}

export interface IPagination { 
    total: number;
    current_page: number;
    total_pages: number;
    per_page: number;
}

export interface IErrorDetail { 
    message: string;
    field? : string;

}



export type TGlobalResponse<T = unknown> = IGlobalResponse<T>;