export interface Review {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url: string;
  time: string;
  language: string;
  textBr: string;
  textEn: string;
}

type GoogleSheetRow = [
  string,  // author_name
  string,  // rating
  string,  // profile_photo_url
  string,  // time
  string,  // language
  string,  // text
  string,  // textBr
  string   // textEn
];

export async function getTestimonials(): Promise<Review[]> {
  try {
    const SPREADSHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID;
    const API_KEY = process.env.GOOGLE_API_KEY;
        
    if (!SPREADSHEET_ID || !API_KEY) {
      throw new Error('Credenciais do Google Sheets não configuradas');
    }
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/DADOS?key=${API_KEY}`
    );

    if (!response.ok) {
      console.log(response);
      throw new Error('Erro ao buscar dados da planilha');
    }

    const data = await response.json();
    const rows = data.values || [];

    // Pula o cabeçalho
    return rows.slice(1).map((row: GoogleSheetRow) => ({
      author_name: row[0] || '',
      rating: Number(row[1]) || 5,
      profile_photo_url: row[2],
      time: row[3] || '',
      language: row[4] || '',
      textBr: row[5] || '',
      textEn: row[6] || '',
    }));
  } catch (error) {
    console.error('Erro ao buscar depoimentos:', error);
    return [];
  }
} 