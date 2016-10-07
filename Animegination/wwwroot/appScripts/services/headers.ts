import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append("AnimeApiClientKey", "AA46C009-49F8-4411-A4D6-131D4BA6D91B");
