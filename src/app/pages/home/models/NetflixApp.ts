 export interface NetflixApp{
    navbar: Navbar; 
    hero: Film;
} 

export interface Navbar{
    logo: Image;
}

export interface Hero{
    hero: Film;
}

export interface Film{
    title: string;
    imgGallery:Image[]
}

export interface Image{
src: string;
alt: string;
}