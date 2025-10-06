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
      name: 'Praia de Itapuã',
      images: ['https://images.pexels.com/photos/23605138/pexels-photo-23605138.jpeg'],
      location: 'Salvador - BA',
      description: `A Praia de Itapuã é uma das mais icônicas e encantadoras de Salvador. Localizada a cerca de 20 km do centro, é famosa por ter inspirado poetas e músicos — especialmente Vinícius de Moraes e Toquinho, que a eternizaram na canção “Tarde em Itapuã”.

      Seu cenário é composto por areias brancas, coqueiros e recifes que formam piscinas naturais de águas mornas e cristalinas durante a maré baixa. É uma praia perfeita para famílias e casais que buscam tranquilidade e um ambiente paradisíaco.

      Além do mar, Itapuã abriga o Farol de Itapuã, cartão-postal histórico e ponto muito visitado para fotos e contemplação do pôr do sol. Na orla, há diversas barracas e restaurantes tradicionais, onde se pode saborear moquecas, acarajés e outras delícias típicas da culinária baiana.

      À noite, a região ganha um clima romântico e acolhedor, ideal para um passeio à beira-mar.`,
      weather: { temp: '27°C', condition: '⛅ Nublado', wind: '10 km/h', rain: '20%' },
      tide: { now: 'Baixa', next: 'Cheia às 16:45' }
    },
    {
      id: 5,
      name: 'Praia do Rio Vermelho',
      images: ['https://images.pexels.com/photos/28500818/pexels-photo-28500818.jpeg'],
      location: 'Salvador - BA',
      description: `Localizada no bairro boêmio mais famoso de Salvador, a Praia do Rio Vermelho é o coração cultural e noturno da cidade. Embora o mar seja mais agitado e nem sempre próprio para banho, o local é conhecido pela sua vida vibrante, bares descolados e tradições religiosas.

      É lá que acontece, todos os anos, a Festa de Iemanjá, no dia 2 de fevereiro — uma das maiores celebrações do candomblé, quando milhares de pessoas vestidas de branco fazem oferendas à Rainha do Mar.

      Durante o dia, o Rio Vermelho é ótimo para caminhadas e para saborear o tradicional acarajé das baianas Dinha e Cira, consideradas patrimônio cultural da Bahia. À noite, o bairro se transforma em um dos principais pontos de encontro de jovens, artistas e turistas, com bares, música ao vivo e um ambiente alegre e acolhedor.`,
      weather: { temp: '26°C', condition: '🌤️ Parcialmente nublado', wind: '15 km/h', rain: '15%' },
      tide: { now: 'Cheia', next: 'Vazante às 18:00' }
    },
    {
      id: 6,
      name: 'Praia do Buracão',
      images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a8/0c/53/caption.jpg?w=1200&h=-1&s=1'],
      location: 'Salvador - BA',
      description: `Escondida entre o Rio Vermelho e Amaralina, a Praia do Buracão é um tesouro urbano de Salvador. Pequena, charmosa e cercada por pedras, é muito frequentada por moradores locais e jovens que buscam um lugar mais reservado, com boa música e uma energia descontraída.

      O mar é forte e com correnteza, portanto o banho requer atenção, mas em dias de maré baixa é possível encontrar pequenas piscinas naturais entre as pedras.

      Ao redor, há barzinhos e quiosques estilizados, ideais para curtir o pôr do sol com um drink e boa companhia. É uma praia com uma vibe alternativa e moderna, perfeita para quem gosta de fugir do turismo mais convencional.`,
      weather: { temp: '28°C', condition: '☀️ Ensolarado', wind: '11 km/h', rain: '0%' },
      tide: { now: 'Baixa', next: 'Cheia às 15:20' }
    },
    {
      id: 7,
      name: 'Praia Amaralina',
      images: ['https://www.guiaviagensbrasil.com/imagens/foto-praia-da-amaralina-salvador-bahia-brasil-2212.jpg'],
      location: 'Salvador - BA',
      description: `A Praia de Amaralina é um dos pontos tradicionais da orla de Salvador, muito frequentada por moradores da cidade e surfistas. O mar é aberto e as ondas são fortes, o que atrai esportistas, mas exige cuidado dos banhistas.

      O calçadão é extenso e ótimo para caminhadas, corridas e passeios de bicicleta. Na orla, as barracas servem comidas típicas baianas, como moqueca, peixe frito e acarajé, com preços acessíveis e clima familiar.

      Além do banho de mar, Amaralina é conhecida pela vista panorâmica e o colorido das jangadas, que dão um toque especial ao cenário. O bairro também respira cultura, sendo reduto de artistas locais e de eventos populares.`,
      weather: { temp: '29°C', condition: '🌤️ Parcialmente nublado', wind: '13 km/h', rain: '10%' },
      tide: { now: 'Cheia', next: 'Vazante às 17:00' }
    },
    {
      id: 8,
      name: 'Praia de Ondina',
      images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/60/93/4f/poucos-conhecem-mas-esta.jpg?w=700&h=400&s=1'],
      location: 'Salvador - BA',
      description: `Situada entre o Rio Vermelho e o Farol da Barra, a Praia de Ondina é uma das mais conhecidas da cidade. Com recifes naturais que formam pequenas piscinas durante a maré baixa, é excelente para banho tranquilo e mergulho leve.

      Além de bela, Ondina é palco do Carnaval de Salvador, com camarotes e trios elétricos passando pela Avenida Oceânica. Fora da folia, a praia mantém um clima mais familiar e tranquilo, ideal para quem busca um banho de mar seguro e estrutura completa de bares, hotéis e restaurantes.

      O pôr do sol de Ondina é um espetáculo à parte, sendo um dos mais bonitos da orla soteropolitana.`,
      weather: { temp: '27°C', condition: '☁️ Nublado', wind: '12 km/h', rain: '30%' },
      tide: { now: 'Baixa', next: 'Cheia às 19:00' }
    },
    {
      id: 9,
      name: 'Praia Jardim de Alá',
      images: ['https://www.guiaviagensbrasil.com/imagens/foto-da-praia-jardim-de-alah-em-salvador-bahia-brasil-2257.jpg'],
      location: 'Pituba',
      description: `A Praia do Jardim de Alá é uma das mais fotogênicas e exóticas de Salvador. Cercada por coqueirais, dunas e gramados, é um ponto perfeito para quem quer relaxar e aproveitar a natureza sem se afastar da cidade.

      O mar é forte e o banho exige cautela, mas o local é excelente para caminhadas, contemplação e piqueniques. O calçadão e a ciclovia convidam ao exercício físico, e o visual natural rende ótimas fotos.

      Há também um parque à beira-mar, ideal para descansar sob a sombra dos coqueiros. À noite, o bairro ganha um ar mais sossegado, com alguns restaurantes e bares elegantes nas redondezas.`,
      weather: { temp: '27°C', condition: '☁️ Nublado', wind: '12 km/h', rain: '30%' },
      tide: { now: 'Baixa', next: 'Cheia às 19:00' }
    },
    {
      id: 10,
      name: 'Praia de Piatã',
      images: ['https://www.guiaviagensbrasil.com/imagens/foto-praia-pieta-salvador-bahia-brasil-9425.jpg'],
      location: 'Salvador - BA',
      description: 'Extensa faixa de areia e mar geralmente calmo em maré baixa; muito frequentada, ótima infraestrutura.',
      weather: { temp: '28°C', condition: '🌤️ Parcialmente nublado', wind: '13 km/h', rain: '15%' },
      tide: { now: 'Meia-maré', next: 'Cheia às 18:30' }
    },
    {
      id: 11,
      name: 'Praia de Armação',
      images: ['https://i0.wp.com/melhoresdestinosdobrasil.com.br/wp-content/uploads/2015/12/praia-armacao-salvador-bahia.jpg?resize=800%2C560&ssl=1'],
      location: 'Salvador - BA',
      description: 'Conhecida por águas agitadas e ventos, boa para esportes náuticos e caminhadas na orla.',
      weather: { temp: '27°C', condition: '🌬️ Ventos moderados', wind: '22 km/h', rain: '10%' },
      tide: { now: 'Vazante', next: 'Baixa às 15:40' }
    },
    {
      id: 12,
      name: 'Praia de Jaguaribe',
      images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/32/f2/ce/praia-de-jaguaribe-salvador.jpg?w=900&h=500&s=1'],
      location: 'Salvador - BA',
      description: 'Famosa pelas ondas e pelo cenário com coqueiros; ponto tradicional de surf em Salvador.',
      weather: { temp: '28°C', condition: '🌊 Ondas moderadas', wind: '18 km/h', rain: '5%' },
      tide: { now: 'Subindo', next: 'Cheia às 17:20' }
    },
    {
      id: 13,
      name: 'São Tomé de Paripe',
      images: ['https://s2-g1.glbimg.com/ciezn2_RS4XMqH6qAoBhfyvmlEc=/0x0:1700x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/L/0/EtDyqaTXyIRnxxBzFbbw/img-6130.jpg'],
      location: 'Subúrbio Ferroviário - Salvador',
      description: 'Águas calmas da Baía de Todos-os-Santos; ideal para famílias e passeios de barco.',
      weather: { temp: '29°C', condition: '☀️ Ensolarado', wind: '9 km/h', rain: '5%' },
      tide: { now: 'Cheia', next: 'Vazante às 16:10' }
    },
    {
      id: 14,
      name: 'Praia da Pituba',
      images: ['https://media-cdn.tripadvisor.com/media/photo-s/07/84/2b/62/praia-pituba.jpg'],
      location: 'Salvador - BA',
      description: `Localizada em um dos bairros mais modernos de Salvador, a Praia da Pituba é marcada por mar agitado e orla urbanizada. É bastante frequentada para atividades físicas, como corrida, ciclismo e caminhadas, graças ao calçadão bem estruturado.

      Embora o banho não seja indicado em todos os trechos, o visual é encantador, e há diversas barracas e quiosques que servem petiscos e bebidas geladas.

      É uma praia com perfil mais urbano e familiar, muito apreciada por quem vive na capital baiana e busca lazer diário à beira-mar.`,
      weather: { temp: '27°C', condition: '⛅ Nublado', wind: '16 km/h', rain: '20%' },
      tide: { now: 'Baixa', next: 'Cheia às 18:50' }
    },
    {
      id: 15,
      name: 'Praia de Patamares',
      images: ['https://www.essemundoenosso.com.br/wp-content/uploads/2014/03/praia-de-patamares-1.jpg'],
      location: 'Salvador - BA',
      description: `Com um visual selvagem e mar agitado, a Praia de Patamares é uma das mais tranquilas da cidade. Sua extensa faixa de areia e o ambiente mais reservado atraem famílias e moradores locais que buscam descanso longe do movimento central.

      O local é ótimo para passeios à beira-mar, esportes de areia e pesca, mas o banho requer atenção por causa das ondas. Há algumas barracas simples, com comida caseira e ambiente acolhedor.

      O pôr do sol visto dali é um dos mais bonitos da orla leste, e o clima de paz faz dela uma ótima opção para quem quer relaxar e se desconectar.`,
      weather: { temp: '28°C', condition: '🌤️ Parcialmente nublado', wind: '17 km/h', rain: '10%' },
      tide: { now: 'Vazante', next: 'Baixa às 16:30' }
    },
    {
      id: 16,
      name: 'Praia de Tubarão',
      images: ['https://lh5.googleusercontent.com/p/AF1QipMgxoDlLbFNP6DcNBoJ0WQp6USheSXt1s2q9RlI=s1600'],
      location: 'Ilhas de Maré (acesso por Salvador)',
      description: 'Praia mais reservada com águas calmas; refúgio para quem busca tranquilidade.',
      weather: { temp: '30°C', condition: '☀️ Ensolarado', wind: '8 km/h', rain: '0%' },
      tide: { now: 'Cheia', next: 'Vazante às 17:10' }
    },
    {
      id: 17,
      name: 'Praia de Pituaçu',
      images: ['https://static.wixstatic.com/media/954288_c0ea959ada884f9aaedc9b548d956d86~mv2.jpg/v1/fill/w_699,h_393,al_c,lg_1,q_80,enc_auto/954288_c0ea959ada884f9aaedc9b548d956d86~mv2.jpg'],
      location: 'Salvador - BA',
      description: `Vizinha de Patamares, a Praia de Pituaçu combina natureza e tranquilidade. O mar é forte e profundo, sendo mais procurada por surfistas e pescadores. A paisagem é marcada por dunas e vegetação nativa, proporcionando um clima rústico e agradável.

      Fica próxima ao Parque Metropolitano de Pituaçu, onde há trilhas e áreas verdes ideais para caminhadas e ciclismo. É uma ótima opção para quem gosta de praias mais vazias e contato direto com a natureza.`,
      weather: { temp: '27°C', condition: '⛅ Nublado', wind: '14 km/h', rain: '20%' },
      tide: { now: 'Subindo', next: 'Cheia às 17:40' }
    },
    {
      id: 18,
      name: 'Praia da Boca do Rio',
      images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/35/22/bb/caption.jpg?w=800&h=400&s=1'],
      location: 'Salvador - BA',
      description: 'Trecho de mar aberto com vista para o encontro do rio com o mar; ambiente tranquilo.',
      weather: { temp: '28°C', condition: '🌤️ Parcialmente nublado', wind: '12 km/h', rain: '10%' },
      tide: { now: 'Vazante', next: 'Baixa às 16:55' }
    },
    {
      id: 19,
      name: 'Praia da Paciência',
      images: ['https://www.salvadordabahia.com/wp-content/uploads/2017/12/cultural-rio-vermelho-07-12-20.jpg'],
      location: 'Rio Vermelho - Salvador',
      description: `Pequena e acolhedora, a Praia da Paciência é um refúgio entre Amaralina e Rio Vermelho. Com águas geralmente calmas e recifes que formam pequenas piscinas naturais, é perfeita para um banho relaxante e seguro.

      Tem uma energia tranquila, frequentada por moradores e visitantes que buscam fugir do agito das praias maiores. O pôr do sol é encantador, e o clima lembra o de uma praia de bairro com charme e autenticidade.

      Nas redondezas, há bons bares e restaurantes, tornando-a uma excelente opção para quem quer curtir o mar e depois aproveitar um almoço ou jantar típico baiano.`,
      weather: { temp: '27°C', condition: '☁️ Nublado', wind: '10 km/h', rain: '25%' },
      tide: { now: 'Baixa', next: 'Cheia às 18:20' }
    },
    {
      id: 20,
      name: 'Ilha dos Frades',
      images: ['https://s2.glbimg.com/wTvHVw5KP_o0tlZK2Zk6tyRParc=/smart/e.glbimg.com/og/ed/f/original/2022/01/14/ilha-dos-frades-2.jpg'],
      location: 'Baía de Todos-os-Santos - Salvador',
      description: `Localizada na Baía de Todos os Santos, a Ilha dos Frades é um paraíso natural com águas cristalinas e areia branca, acessível apenas por barco. O nome vem dos frades franciscanos que viveram ali no período colonial.

      A ilha abriga praias deslumbrantes, como Nossa Senhora de Guadalupe, que ostenta a certificação Bandeira Azul, símbolo internacional de qualidade ambiental.

      Além do banho e do mergulho, o visitante pode explorar trilhas ecológicas, visitar a igreja colonial de Guadalupe e saborear frutos do mar frescos nas barracas locais.

      É um passeio imperdível para quem visita Salvador e deseja um contato mais próximo com a natureza em um ambiente preservado e tranquilo.`,
      weather: { temp: '29°C', condition: '☀️ Ensolarado', wind: '9 km/h', rain: '5%' },
      tide: { now: 'Cheia', next: 'Vazante às 17:30' }
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.beach = this.beaches.find(b => b.id === id);

    if (this.beach?.city) {
      this.weatherService.getCurrentWeather(this.beach.city).subscribe({
        next: (data: WeatherResponse) => {
      
          const tempStr = `${Math.round(data.main.temp)}°C`;

          const condition = this.mapWeatherIcon(data.weather[0].description);

          const windKmh = Math.round((data.wind?.speed ?? 0) * 3.6);
          const windStr = `${windKmh} km/h`;

  
          const rainPercent = data.rain?.['1h']
            ? Math.min(100, Math.round(data.rain['1h'] * 10)) 
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
