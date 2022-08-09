import { gql } from 'apollo-server'

export const typeDefinitions = gql`
  """
  La entidad del usuario es aquella que posee roles y accesos en la plataforma.
  """
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

  scalar Date

  """
  La entrevista son todos los informes, notas, procesos y remisiones
  que registran los capellanes y realizan a todos los tipos de
  beneficiarios, ya sean estudiantes, docentes, miembros de la IASD, etc.
  """
  type Interview {
    _id: ID
    idInterview: String
    topic: Topic
    topicDescription: String
    actionsDescription: String
    referralDepartment: ReferralDepartment
    # userCreate: User
    # userUpdate: User
    createdAt: Date
    updatedAt: Date
    userCreate: Date
    userUpdate: String
  }

  type Query {
    user(email: String): User
    users: [User]
    usersCount: Int
    interview(idInterview: String): Interview
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
