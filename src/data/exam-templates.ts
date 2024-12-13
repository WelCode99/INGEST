import { ExamTemplate } from '../types/physical-exam';

export const examTemplates: ExamTemplate[] = [
  {
    type: 'head-neck',
    title: 'Semiologia de Cabeça e Pescoço',
    description: 'Avaliação sistemática das estruturas da cabeça e pescoço',
    steps: [
      {
        id: 'head-inspection',
        title: 'Inspeção da Cabeça',
        description: 'Observe simetria, lesões, movimentos involuntários',
        required: true,
        technicalTerms: ['assimetria facial', 'ptose palpebral', 'nistagmo'],
        normalFindings: ['Face simétrica', 'Movimentos oculares preservados'],
        abnormalFindings: ['Assimetria facial', 'Desvio de rima']
      },
      {
        id: 'neck-palpation',
        title: 'Palpação Cervical',
        description: 'Palpe linfonodos, tireoide e estruturas cervicais',
        required: true,
        technicalTerms: ['linfonodomegalia', 'bócio', 'carótidas'],
        normalFindings: ['Ausência de linfonodomegalias', 'Tireoide não palpável'],
        abnormalFindings: ['Linfonodos aumentados', 'Tireoide aumentada']
      }
    ]
  },
  {
    type: 'skin',
    title: 'Exame da Pele e Anexos',
    description: 'Avaliação dermatológica completa incluindo mucosas e fâneros',
    steps: [
      {
        id: 'skin-inspection',
        title: 'Inspeção da Pele',
        description: 'Observe coloração, lesões elementares, distribuição',
        required: true,
        technicalTerms: ['mácula', 'pápula', 'nódulo', 'vesícula'],
        normalFindings: ['Pele íntegra', 'Coloração uniforme'],
        abnormalFindings: ['Lesões cutâneas', 'Alteração de coloração']
      }
    ]
  },
  {
    type: 'thorax-respiratory',
    title: 'Exame do Tórax e Sistema Respiratório',
    description: 'Avaliação completa da estrutura torácica e função respiratória',
    steps: [
      {
        id: 'thorax-inspection',
        title: 'Inspeção do Tórax',
        description: 'Observe formato, simetria e padrão respiratório',
        required: true,
        technicalTerms: ['tiragem intercostal', 'tipo respiratório', 'frequência respiratória'],
        normalFindings: ['Tórax simétrico', 'FR normal'],
        abnormalFindings: ['Tiragem intercostal', 'Uso de musculatura acessória']
      }
    ]
  },
  {
    type: 'cardiovascular',
    title: 'Exame Cardíaco',
    description: 'Avaliação sistemática do sistema cardiovascular',
    steps: [
      {
        id: 'cv-inspection',
        title: 'Inspeção Precordial',
        description: 'Observe ictus cordis e abaulamentos',
        required: true,
        technicalTerms: ['ictus cordis', 'pulso venoso jugular'],
        normalFindings: ['Ictus não visível', 'Ausência de abaulamentos'],
        abnormalFindings: ['Ictus visível e desviado', 'Abaulamento sistólico']
      }
    ]
  },
  {
    type: 'vascular',
    title: 'Exame do Sistema Vascular Periférico',
    description: 'Avaliação da circulação arterial e venosa periférica',
    steps: [
      {
        id: 'pulse-palpation',
        title: 'Palpação de Pulsos',
        description: 'Avalie pulsos periféricos bilateralmente',
        required: true,
        technicalTerms: ['amplitude', 'simetria', 'ritmo'],
        normalFindings: ['Pulsos simétricos e rítmicos'],
        abnormalFindings: ['Pulsos assimétricos', 'Ausência de pulsos']
      }
    ]
  },
  {
    type: 'lymphatic',
    title: 'Exame dos Gânglios e Sistema Linfático',
    description: 'Avaliação sistemática do sistema linfático',
    steps: [
      {
        id: 'lymph-palpation',
        title: 'Palpação Ganglionar',
        description: 'Examine todas as cadeias ganglionares',
        required: true,
        technicalTerms: ['linfonodomegalia', 'consistência', 'mobilidade'],
        normalFindings: ['Gânglios não palpáveis'],
        abnormalFindings: ['Linfonodos aumentados', 'Linfonodos fixos']
      }
    ]
  },
  {
    type: 'abdomen',
    title: 'Exame Físico de Abdome e Sistema Digestório',
    description: 'Avaliação completa do abdome e sistema digestivo',
    steps: [
      {
        id: 'abdomen-inspection',
        title: 'Inspeção do Abdome',
        description: 'Observe forma, volume e movimentos',
        required: true,
        technicalTerms: ['distensão', 'circulação colateral', 'peristaltismo visível'],
        normalFindings: ['Abdome plano', 'Ausência de distensão'],
        abnormalFindings: ['Distensão abdominal', 'Circulação colateral']
      }
    ]
  },
  {
    type: 'locomotor',
    title: 'Exame do Sistema Locomotor',
    description: 'Avaliação da função musculoesquelética',
    steps: [
      {
        id: 'muscle-exam',
        title: 'Exame Muscular',
        description: 'Avalie força, tônus e trofismo',
        required: true,
        technicalTerms: ['força muscular', 'tônus', 'atrofia'],
        normalFindings: ['Força muscular preservada', 'Tônus normal'],
        abnormalFindings: ['Diminuição de força', 'Atrofia muscular']
      }
    ]
  },
  {
    type: 'osteoarticular',
    title: 'Exame Osteoarticular',
    description: 'Avaliação sistemática do sistema osteoarticular',
    steps: [
      {
        id: 'joint-exam',
        title: 'Exame Articular',
        description: 'Avalie mobilidade e estabilidade',
        required: true,
        technicalTerms: ['amplitude de movimento', 'crepitação', 'instabilidade'],
        normalFindings: ['Mobilidade preservada', 'Articulações estáveis'],
        abnormalFindings: ['Limitação de movimento', 'Instabilidade articular']
      }
    ]
  },
  {
    type: 'urinary',
    title: 'Exame das Vias Urinárias e Sistema Reprodutor Masculino',
    description: 'Avaliação do sistema geniturinário masculino',
    steps: [
      {
        id: 'genital-exam',
        title: 'Exame Genital',
        description: 'Realize inspeção e palpação',
        required: true,
        technicalTerms: ['fimose', 'hidrocele', 'varicocele'],
        normalFindings: ['Genitália sem alterações'],
        abnormalFindings: ['Presença de varicocele', 'Hidrocele']
      }
    ]
  },
  {
    type: 'gynecologic',
    title: 'Semiologia Ginecológica e Mamária',
    description: 'Avaliação ginecológica e das mamas',
    steps: [
      {
        id: 'breast-exam',
        title: 'Exame das Mamas',
        description: 'Realize inspeção e palpação mamária',
        required: true,
        technicalTerms: ['nódulo', 'retração', 'descarga papilar'],
        normalFindings: ['Mamas simétricas', 'Ausência de nódulos'],
        abnormalFindings: ['Nódulo palpável', 'Retração cutânea']
      }
    ]
  },
  {
    type: 'neurologic',
    title: 'Exame do Sistema Nervoso',
    description: 'Avaliação neurológica completa',
    steps: [
      {
        id: 'mental-status',
        title: 'Estado Mental',
        description: 'Avalie consciência e funções cognitivas',
        required: true,
        technicalTerms: ['nível de consciência', 'orientação', 'memória'],
        normalFindings: ['Consciente e orientado', 'Memória preservada'],
        abnormalFindings: ['Desorientação', 'Alteração de memória']
      }
    ]
  },
  {
    type: 'mental',
    title: 'Avaliação da Saúde Mental',
    description: 'Exame do estado mental e aspectos psiquiátricos',
    steps: [
      {
        id: 'psychiatric-exam',
        title: 'Exame Psiquiátrico',
        description: 'Avalie humor e comportamento',
        required: true,
        technicalTerms: ['humor', 'afeto', 'pensamento'],
        normalFindings: ['Humor eutímico', 'Pensamento organizado'],
        abnormalFindings: ['Alteração do humor', 'Pensamento desorganizado']
      }
    ]
  }
];