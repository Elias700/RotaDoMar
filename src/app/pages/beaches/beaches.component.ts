// src/app/pages/beaches/beaches.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-beaches',
  templateUrl: './beaches.component.html',
  styleUrls: ['./beaches.component.css'],
  imports: [CommonModule]
})
export class BeachesComponent {

  beaches = [
    {
      name: 'Praia Farol da Barra',
      image: 'https://images.pexels.com/photos/23228012/pexels-photo-23228012.jpeg',
      description: 'Uma das praias mais famosas de Salvador, com o icônico Farol da Barra e águas calmas, ideal para banho.',
      link: '#'
    },
    {
      name: 'Praia do Porto da Barra',
      image: 'https://images.pexels.com/photos/13733832/pexels-photo-13733832.jpeg',
      description: 'Conhecida por seu pôr do sol espetacular e águas tranquilas. Um ponto de encontro popular entre locais e turistas.',
      link: '#'
    },
    {
      name: 'Praia de Stella Maris',
      image: 'https://images.pexels.com/photos/3765562/pexels-photo-3765562.jpeg',
      description: 'Com ondas fortes e extensa faixa de areia, é perfeita para a prática de surf e caminhadas.',
      link: '#'
    },
    {
      name: 'Praia de Itapoã',
      image: 'https://images.pexels.com/photos/23605138/pexels-photo-23605138.jpeg',
      description: 'Cenário de canções e poemas, é uma praia com coqueiros e areia clara, ideal para relaxar e aproveitar a paisagem.',
      link: '#'
    },
    {
      name: 'Praia do Rio Vermelho',
      image: 'https://images.pexels.com/photos/28500818/pexels-photo-28500818.jpeg',
      description: 'Localizada em um bairro boêmio, é conhecida por sua vida noturna, culinária e festas religiosas.',
      link: '#'
    },
    {
      name: 'Praia do Buracão',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a8/0c/53/caption.jpg?w=1200&h=-1&s=1',
      description: 'Uma pequena enseada charmosa e reservada, com ondas fortes e um clima mais intimista.',
      link: '#'
    },
    {
      name: 'Praia Amaralina',
      image: 'https://www.guiaviagensbrasil.com/imagens/foto-praia-da-amaralina-salvador-bahia-brasil-2212.jpg',
      description: 'Com ondas fortes e recifes de corais, é bastante utilizada para a prática de surf e pesca.',
      link: '#'
    },
    {
      name: 'Praia de Ondina',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/60/93/4f/poucos-conhecem-mas-esta.jpg?w=700&h=400&s=1',
      description: 'Ponto inicial do circuito de carnaval, possui águas calmas e é cercada por hotéis e resorts.',
      link: '#'
    },
    {
      name: 'Praia Jardim de Alá',
      image: 'https://www.guiaviagensbrasil.com/imagens/foto-da-praia-jardim-de-alah-em-salvador-bahia-brasil-2257.jpg',
      description: 'Uma praia urbanizada, com ciclovia e calçadão, excelente para quem busca atividades ao ar livre.',
      link: '#'
    },
    {
      name: 'Praia de Piatã',
      image: 'https://www.guiaviagensbrasil.com/imagens/foto-praia-pieta-salvador-bahia-brasil-9425.jpg',
      description: 'Com extensa faixa de areia, é uma das praias mais frequentadas, com infraestrutura completa de quiosques e bares.',
      link: '#'
    },
    {
      name: 'Praia de Armação',
      image: 'https://i0.wp.com/melhoresdestinosdobrasil.com.br/wp-content/uploads/2015/12/praia-armacao-salvador-bahia.jpg?resize=800%2C560&ssl=1',
      description: 'Conhecida por suas águas agitadas e ventos fortes, é ideal para a prática de esportes náuticos.',
      link: '#'
    },
    {
      name: 'Praia de Jaguaribe',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/32/f2/ce/praia-de-jaguaribe-salvador.jpg?w=900&h=500&s=1',
      description: 'Famosa por suas ondas, é um ponto de encontro para surfistas e praticantes de kitesurf.',
      link: '#'
    },
    {
      name: 'Praia de São Tomé de Paripe',
      image: 'https://s2-g1.glbimg.com/ciezn2_RS4XMqH6qAoBhfyvmlEc=/0x0:1700x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/L/0/EtDyqaTXyIRnxxBzFbbw/img-6130.jpg',
      description: 'Uma praia mais afastada, com águas calmas e ideal para famílias com crianças. Possui uma vista incrível para a Baía de Todos-os-Santos.',
      link: '#'
    },
    {
      name: 'Praia da Pituba',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/84/2b/62/praia-pituba.jpg',
      description: 'Praia urbana, com ondas fortes e uma orla bem estruturada, utilizada para caminhadas e esportes.',
      link: '#'
    },
    {
      name: 'Praia de Patamares',
      image: 'https://www.essemundoenosso.com.br/wp-content/uploads/2014/03/praia-de-patamares-1.jpg',
      description: 'Com ondas fortes e extensa faixa de areia, é bastante procurada por surfistas e praticantes de esportes aquáticos.',
      link: '#'
    },
    {
      name: 'Praia de Tubarão',
      image: 'https://lh5.googleusercontent.com/p/AF1QipMgxoDlLbFNP6DcNBoJ0WQp6USheSXt1s2q9RlI=s1600',
      description: 'Uma praia mais tranquila e de águas calmas, ideal para quem busca um refúgio da agitação da cidade.',
      link: '#'
    },
    {
      name: 'Praia de Pituaçu',
      image: 'https://static.wixstatic.com/media/954288_c0ea959ada884f9aaedc9b548d956d86~mv2.jpg/v1/fill/w_699,h_393,al_c,lg_1,q_80,enc_auto/954288_c0ea959ada884f9aaedc9b548d956d86~mv2.jpg',
      description: 'Localizada próxima ao Parque de Pituaçu, é uma praia mais urbanizada, com uma orla ideal para passeios de bicicleta e caminhadas.',
      link: '#'
    },
    {
      name: 'Praia da Boca do Rio',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/35/22/bb/caption.jpg?w=800&h=400&s=1',
      description: 'Com águas calmas e uma vista para o rio e o mar, é uma praia tranquila, ideal para quem busca paz e sossego.',
      link: '#'
    },
    {
      name: 'Praia da Paciência (Rio Vermelho)',
      image: 'https://www.salvadordabahia.com/wp-content/uploads/2017/12/cultural-rio-vermelho-07-12-20.jpg',
      description: 'Pequena e charmosa, é um local de refúgio e calmaria, ideal para quem busca um lugar mais tranquilo.',
      link: '#'
    },
    {
      name: 'Ilha dos Frades',
      image: 'https://s2.glbimg.com/wTvHVw5KP_o0tlZK2Zk6tyRParc=/smart/e.glbimg.com/og/ed/f/original/2022/01/14/ilha-dos-frades-2.jpg',
      description: 'Um paraíso de águas cristalinas e tranquilas. É ideal para mergulho e para quem busca contato com a natureza em um ambiente mais reservado.',
      link: '#'
    }
  ];

}