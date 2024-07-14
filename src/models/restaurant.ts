export class Restaurant {
  id: number;
  name: string;
  description: string;
  location: string;
  category: string;

  constructor(id: number, name: string, description: string, location: string, category: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location;
    this.category = category;
  }
}
