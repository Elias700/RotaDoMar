import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beach-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beach-detail.component.html',
  styleUrls: ['./beach-detail.component.css']
})
export class BeachDetailComponent {
  beach: any;

  beaches = [
    {
      id: 1,
      name: 'Praia Farol da Barra',
      images: ['https://images.pexels.com/photos/23228012/pexels-photo-23228012.jpeg'],
      location: 'Salvador - BA',
      description: 'A Praia do Farol da Barra é, sem dúvida, um dos cartões-postais mais famosos de Salvador, Bahia. Sua paisagem combina a beleza natural de uma enseada de águas calmas com a imponência histórica do **Farol da Barra**, que se ergue na ponta da praia. Esse cenário não atrai apenas turistas, mas também moradores que buscam um local para relaxar e apreciar a vista. A praia, de fato, oferece diferentes experiências: a parte mais próxima ao farol tem águas um pouco mais agitadas, enquanto a enseada, conhecida como Porto da Barra, é ideal para quem prefere um banho de mar mais tranquilo, com águas cristalinas, perfeitas para nadar e praticar stand-up paddle. A orla é um ponto de encontro vibrante, com quiosques, restaurantes e bares que servem desde a tradicional água de coco até acarajés e petiscos. O movimento se estende até a noite, com a região se transformando em um polo de vida noturna. Além do banho de mar, o local oferece a oportunidade de visitar o **Museu Náutico da Bahia**, que fica dentro do forte onde o farol está construído, e de ter uma vista panorâmica da cidade e da Baía de Todos-os-Santos. O pôr do sol, em particular, é um espetáculo à parte, atraindo uma multidão para contemplar a explosão de cores no céu, tornando a Praia do Farol da Barra um lugar que encapsula a energia e a beleza da capital baiana.',
      weather: { temp: '28°C', condition: '☀️ Ensolarado', wind: '12 km/h', rain: '10%' },
      tide: { now: 'Baixa', next: 'Cheia às 15:00' }
    },
    {
      id: 2,
      name: 'Praia do Porto da Barra',
      images: ['https://images.pexels.com/photos/13733832/pexels-photo-13733832.jpeg'],
      location: 'Salvador - BA',
      description: 'Conhecida por seu pôr do sol espetacular e águas tranquilas. Um ponto de encontro popular entre locais e turistas.',
      weather: { temp: '27°C', condition: '🌤️ Parcialmente nublado', wind: '9 km/h', rain: '5%' },
      tide: { now: 'Cheia', next: 'Vazante às 16:00' }
    },
    {
      id: 3,
      name: 'Praia de Stella Maris',
      images: ['https://images.pexels.com/photos/3765562/pexels-photo-3765562.jpeg'],
      location: 'Salvador - BA',
      description: 'Com ondas fortes e extensa faixa de areia, é perfeita para a prática de surf e caminhadas.',
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
      weather: {temp: '27°C', condition: '☁️ Nublado', wind: '12 km/h', rain: '30%'},
      tide: { now: 'Baixa', next: 'Cheia às 19:00' }
    }
    
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.beach = this.beaches.find(b => b.id === id);
  }

  atualizarDados() {
    alert('🔁 Informações atualizadas em tempo real!');
  }
}
