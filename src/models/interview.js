import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const User = new mongoose.Schema(
  {
    idInterview: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    topic: {
      type: String,
      enum: [
        'Academico_Universitario',
        'Problemas_y_o_conflictos_familiares',
        'Auxilio_matricula',
        'Auxilio_manutencion',
        'Auxilio_plan_de_trabajo',
        'Bautismo_por_primera_vez_en_la_IASD',
        'Bautismo_por_segunda_vez_en_la_IASD',
        'Toma_de_profesion_de_posesion_en_la_IASD',
        'Toma_de_estudios_biblicos_para_bautismo_en_la_IASD',
        'Desercion_de_la_IASD',
        'Salud',
        'Deportes',
        'Clubes_adventistas',
        'Especiales_de_cantos_musicas_conciertos',
        'Ministerios_Adventistas',
        'Violacion',
      ],
      default: 'Academico_Universitario',
    },
    topicDescription: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    actionsDescription: {
      type: String,
      required: true,
    },
    referralDepartment: {
      type: String,
      enum: [
        'No_necesita_remision',
        'Centro_de_Psicologia',
        'Centro_de_Pediatria',
        'Respectivo_decano_de_la_facultad',
        'Pastor',
      ],
      default: 'No_necesita_remision',
    },
    // patient: {
    //   ref: 'User',
    //   type: mongoose.Schema.Types.ObjectId,
    // },


    // userCreate: {
    //   ref: 'User',
    //   type: mongoose.Schema.Types.ObjectId,
    // },
    // userUpdate: {
    //   ref: 'User',
    //   type: mongoose.Schema.Types.ObjectId,
    // },


    patient: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
      maxLength: 10,
    },
    userCreate: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
      maxLength: 10,
    },
    userUpdate: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
      maxLength: 10,
    },
  },
  { timestamps: true }
)

User.plugin(mongooseUniqueValidator)
export default mongoose.model('user', User)
