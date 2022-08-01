import { gql } from 'apollo-server'

export const typeDefinitions = gql`
  type User {
    _id: ID
    idDocument: ID
    name: String
    email: String
    password: String
    phoneNumber: String
    birthDate: String
    detail: String
    interviews: [Interview]
  }

  type Token {
    value: String
  }

  enum Topic {
    Academico_Universitario
    Problemas_y_o_conflictos_familiares
    Auxilio_matricula
    Auxilio_manutencion
    Auxilio_plan_de_trabajo
    Bautismo_por_primera_vez_en_la_IASD
    Bautismo_por_segunda_vez_en_la_IASD
    Toma_de_profesion_de_posesion_en_la_IASD
    Toma_de_estudios_biblicos_para_bautismo_en_la_IASD
    Desercion_de_la_IASD
    Salud
    Deportes
    Clubes_adventistas
    Especiales_de_cantos_musicas_conciertos
    Ministerios_Adventistas
    Violacion
  }

  enum ReferralDepartment {
    No_necesita_remision
    Centro_de_Psicologia
    Centro_de_Pediatria
    Respectivo_decano_de_la_facultad
    Pastor
  }

  type Interview {
    _id: ID
    idInterview: ID
    topic: Topic
    topicDescription: String
    actionsDescription: String
    referralDepartment: ReferralDepartment
    # userCreate: User
    # userUpdate: User
    userCreate: String
    userUpdate: String
  }

  type Query {
    user: User
    users: [User]
    usersCount: Int
    interview: Interview
    interviews: [Interview]
    interviewsCount: Int
  }

  type Mutation {
    createUser(
      idDocument: ID!
      name: String
      email: String
      password: String
      phoneNumber: String
      birthDate: String
      detail: String
    ): User
    login(email: String!, password: String!): Token
    createInterview(
      topic: Topic
      topicDescription: String
      actionsDescription: String
      referralDepartment: ReferralDepartment
    ): Interview
  }
`
