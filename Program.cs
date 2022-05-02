Console.Write("Insira suas string separadas por um espaço: ");
string Palavras = Console.ReadLine();

Console.WriteLine(Palavras);

string[] Texto = Palavras.Split(' ');

string PrimeiraPalavra = Texto[0];
string SegundaPalavra = Texto[1];

Console.ReadLine();
