import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeatherService, WeatherResponse } from '../../app/services/weather.service';

@Component({
  selector: 'app-beach-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beach-detail.component.html',
  styleUrls: ['./beach-detail.component.css']
})
export class BeachDetailComponent implements OnInit {
  beach: any;

  // mantive os dados que você tinha (até id 9 conforme seu exemplo),
  // adicionei `city: 'Salvador'` nas duas primeiras praias para demonstrar dados dinâmicos
  beaches = [
    {
      id: 1,
      name: 'Praia Farol da Barra',
      city: 'Salvador',
      images: ['https://images.pexels.com/photos/23228012/pexels-photo-23228012.jpeg'],
      location: 'Salvador - BA',
      description: 'A Praia do Farol da Barra, situada no bairro da Barra em Salvador, Bahia, é inquestionavelmente um dos pontos turísticos e de lazer mais emblemáticos da cidade. Ela se estende a partir do imponente Forte de Santo Antônio da Barra, onde se localiza o histórico Farol da Barra, o que confere à paisagem uma moldura arquitetônica e cultural inigualável. O mar neste ponto é conhecido pela sua diversidade: um trecho é protegido por arrecifes, que formam deliciosas piscinas naturais de águas cristalinas e mornas durante a maré baixa, ideais para banho e mergulho livre. Já o outro trecho, em direção ao Morro do Cristo, oferece mar aberto com ondas mais fortes, o que atrai praticantes de surfe. A praia é extremamente popular, não só por sua beleza e infraestrutura com quiosques e calçadão, mas principalmente por ser o palco do pôr do sol mais famoso de Salvador. Turistas e moradores se reúnem diariamente para assistir ao espetáculo onde o sol se põe no horizonte do mar, tingindo o céu e as paredes do forte com cores vibrantes, criando um ambiente de contemplação e celebração que é a cara da capital baiana. Além disso, a área é vital para a cultura e festividades, sendo o ponto de largada do tradicional Carnaval de Salvador no circuito Barra-Ondina.',
      weather: { temp: '28°C', condition: '☀️ Ensolarado', wind: '12 km/h', rain: '10%' },
      tide: { now: 'Baixa', next: 'Cheia às 15:00' }
    },
    {
      id: 2,
      name: 'Praia do Porto da Barra',
      city: 'Salvador',
      images: ['https://images.pexels.com/photos/13733832/pexels-photo-13733832.jpeg'],
      location: 'Salvador - BA',
      description: 'A Praia do Porto da Barra é frequentemente considerada a queridinha dos soteropolitanos e de turistas, tendo sido, inclusive, citada por jornais internacionais como uma das melhores praias urbanas do mundo. Localizada no bairro da Barra, ela é uma enseada de faixa de areia relativamente curta, mas de grande charme e importância histórica. O que mais a define são as suas águas: por estar dentro da Baía de Todos-os-Santos, o mar é excepcionalmente calmo, morno e cristalino, o que a torna perfeita para banho, famílias com crianças e a prática de esportes náuticos como stand up paddle e caiaque. A história do local é visível e palpável, já que a praia é delimitada por duas fortificações coloniais: o Forte de Santa Maria à esquerda e o Forte de São Diogo à direita, que hoje abrigam espaços culturais, adicionando um toque cultural único ao cenário. O Porto da Barra também é famoso por proporcionar um dos espetáculos mais concorridos da cidade: o pôr do sol. Milhares de pessoas se reúnem diariamente para assistir ao sol se pondo diretamente no mar da baía, num show de cores que é uma experiência imperdível em Salvador. Apesar de ser sempre muito movimentada e concorrida, a Praia do Porto da Barra é um refúgio de águas mansas no coração da capital baiana.',
      weather: { temp: '27°C', condition: '🌤️ Parcialmente nublado', wind: '9 km/h', rain: '5%' },
      tide: { now: 'Cheia', next: 'Vazante às 16:00' }
    },
    {
      id: 3,
      name: 'Praia de Stella Maris',
      images: ['https://images.pexels.com/photos/3765562/pexels-photo-3765562.jpeg'],
      location: 'Salvador - BA',
      description: 'A Praia de Stella Maris é um dos trechos do litoral de Salvador que oferece uma atmosfera mais de "praia de oceano" e está localizada em um bairro homônimo, mais distante do centro da cidade. É uma praia de faixa de areia extensa, ideal para longas caminhadas, cercada por um lindo coqueiral e vegetação de restinga, o que lhe confere um visual bastante paradisíaco e menos "urbano" que as praias da Barra. O mar de Stella Maris é famoso por ter boas ondas e mar aberto, sendo um dos principais picos de surfe da capital baiana e palco de alguns torneios do esporte. No entanto, ela também agrada quem busca tranquilidade para o banho. Em períodos de maré baixa, especialmente no verão, as formações de arrecifes e corais criam diversas piscinas naturais de águas transparentes e mornas, perfeitas para banhistas e famílias. A praia conta com uma excelente infraestrutura de barracas, sendo o local de uma das unidades da famosa Barraca do Lôro, além de ter sido recentemente revitalizada, com a instalação de ciclovia, calçadões e áreas esportivas, atraindo tanto surfistas quanto frequentadores que buscam lazer, esporte e um ambiente mais badalado no litoral norte de Salvador. É uma praia que equilibra a natureza preservada com a efervescência da vida social de Salvador.',
      weather: { temp: '29°C', condition: '☀️ Ensolarado', wind: '14 km/h', rain: '0%' },
      tide: { now: 'Cheia', next: 'Vazante às 14:30' }
    },
    {
      id: 4,
      name: 'Praia de Itapoã',
      images: ['https://images.pexels.com/photos/23605138/pexels-photo-23605138.jpeg'],
      location: 'Salvador - BA',
      description: 'Cenário de canções e poemas, é uma praia com coqueiros e areia clara, ideal para relaxar e aproveitar a paisagem.',
      weather: { temp: '27°C', condition: '⛅ Nublado', wind: '10 km/h', rain: '20%' },
      tide: { now: 'Baixa', next: 'Cheia às 16:45' }
    },
    {
      id: 5,
      name: 'Praia do Rio Vermelho',
      images: ['https://images.pexels.com/photos/28500818/pexels-photo-28500818.jpeg'],
      location: 'Salvador - BA',
      description: 'Localizada em um bairro boêmio, é conhecida por sua vida noturna, culinária e festas religiosas.',
      weather: { temp: '26°C', condition: '🌤️ Parcialmente nublado', wind: '15 km/h', rain: '15%' },
      tide: { now: 'Cheia', next: 'Vazante às 18:00' }
    },
    {
      id: 6,
      name: 'Praia do Buracão',
      images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a8/0c/53/caption.jpg?w=1200&h=-1&s=1'],
      location: 'Salvador - BA',
      description: 'Uma pequena enseada charmosa e reservada, com ondas fortes e um clima mais intimista.',
      weather: { temp: '28°C', condition: '☀️ Ensolarado', wind: '11 km/h', rain: '0%' },
      tide: { now: 'Baixa', next: 'Cheia às 15:20' }
    },
    {
      id: 7,
      name: 'Praia Amaralina',
      images: ['https://www.guiaviagensbrasil.com/imagens/foto-praia-da-amaralina-salvador-bahia-brasil-2212.jpg'],
      location: 'Salvador - BA',
      description: 'Com ondas fortes e recifes de corais, é bastante utilizada para a prática de surf e pesca.',
      weather: { temp: '29°C', condition: '🌤️ Parcialmente nublado', wind: '13 km/h', rain: '10%' },
      tide: { now: 'Cheia', next: 'Vazante às 17:00' }
    },
    {
      id: 8,
      name: 'Praia de Ondina',
      images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/60/93/4f/poucos-conhecem-mas-esta.jpg?w=700&h=400&s=1'],
      location: 'Salvador - BA',
      description: 'Ponto inicial do circuito de carnaval, possui águas calmas e é cercada por hotéis e resorts.',
      weather: { temp: '27°C', condition: '☁️ Nublado', wind: '12 km/h', rain: '30%' },
      tide: { now: 'Baixa', next: 'Cheia às 19:00' }
    },
    {
      id: 9,
      name: 'Praia Jardim de Alá',
      images: ['https://www.guiaviagensbrasil.com/imagens/foto-da-praia-jardim-de-alah-em-salvador-bahia-brasil-2257.jpg'],
      location: 'Pituba',
      description: 'Uma praia urbanizada, com ciclovia e calçadão, excelente para quem busca atividades ao ar livre.',
      weather: { temp: '27°C', condition: '☁️ Nublado', wind: '12 km/h', rain: '30%' },
      tide: { now: 'Baixa', next: 'Cheia às 19:00' }
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.beach = this.beaches.find(b => b.id === id);

    // Se o objeto da praia tiver a propriedade `city`, buscamos o clima dinamicamente
    if (this.beach?.city) {
      this.weatherService.getCurrentWeather(this.beach.city).subscribe({
        next: (data: WeatherResponse) => {
          // temperatura
          const tempStr = `${Math.round(data.main.temp)}°C`;

          // condição mapeada (ícone/texto)
          const condition = this.mapWeatherIcon(data.weather[0].description);

          // vento: converter m/s -> km/h (1 m/s = 3.6 km/h)
          const windKmh = Math.round((data.wind?.speed ?? 0) * 3.6);
          const windStr = `${windKmh} km/h`;

          // chuva: heurística para exibir percentual
          // se houver `rain["1h"]` (mm) convertemos pra uma estimativa percentual (não é exata)
          // senão usamos `clouds.all` como fallback (percentual de nebulosidade)
          const rainPercent = data.rain?.['1h']
            ? Math.min(100, Math.round(data.rain['1h'] * 10)) // heurística: 0.1mm -> 1%
            : (data.clouds?.all ?? 0);
          const rainStr = `${rainPercent}%`;

          this.beach.weather = {
            temp: tempStr,
            condition,
            wind: windStr,
            rain: rainStr
          };
        },
        error: (err) => {
          console.error('Erro ao buscar clima:', err);
          // mantém os dados estáticos já presentes ou mensagem de erro amigável
          this.beach.weather = {
            temp: this.beach.weather?.temp ?? '--',
            condition: 'Não disponível',
            wind: this.beach.weather?.wind ?? '--',
            rain: this.beach.weather?.rain ?? '--'
          };
        }
      });
    }
  }

  atualizarDados() {
    // recarrega apenas os dados do clima para a praia atual
    if (this.beach?.city) {
      this.weatherService.getCurrentWeather(this.beach.city).subscribe({
        next: (data: WeatherResponse) => {
          const tempStr = `${Math.round(data.main.temp)}°C`;
          const condition = this.mapWeatherIcon(data.weather[0].description);
          const windKmh = Math.round((data.wind?.speed ?? 0) * 3.6);
          const windStr = `${windKmh} km/h`;
          const rainPercent = data.rain?.['1h'] ? Math.min(100, Math.round(data.rain['1h'] * 10)) : (data.clouds?.all ?? 0);
          const rainStr = `${rainPercent}%`;

          this.beach.weather = {
            temp: tempStr,
            condition,
            wind: windStr,
            rain: rainStr
          };
        },
        error: (err) => {
          console.error('Erro ao atualizar clima:', err);
        }
      });
    }
  }

  private mapWeatherIcon(description: string): string {
    const desc = description.toLowerCase();
    if (desc.includes('céu limpo') || desc.includes('clear') || desc.includes('sol')) return '☀️ Ensolarado';
    if (desc.includes('nublado') || desc.includes('cloud')) return '⛅ Nublado';
    if (desc.includes('chuva') || desc.includes('rain')) return '🌧️ Chuva';
    if (desc.includes('neve') || desc.includes('snow')) return '❄️ Neve';
    return description;
  }
}
