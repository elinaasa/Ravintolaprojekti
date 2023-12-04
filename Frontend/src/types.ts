interface Course {
  menu_id: number;
  name: string;
  description: string;
  week_number: number;
  day_of_week: number;
  diet: string;
}

interface Menu {
  menu_id: number;
  week_number: number;
  day_of_week: number;
  courses: Course[];
}

export type { Course, Menu };
